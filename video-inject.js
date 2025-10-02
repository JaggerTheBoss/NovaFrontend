// Video injection script
// CHANGE THIS URL TO YOUR RAILWAY BACKEND URL
const BACKEND_URL = 'https://YOUR-APP.up.railway.app'; // CHANGE THIS TO YOUR RAILWAY URL!

(function() {
  async function checkAndInjectVideo() {
    try {
      const response = await fetch(`${BACKEND_URL}/api/mode`);
      const data = await response.json();

      console.log('Video mode status:', data.videoMode);

      if (data.videoMode) {
        // Check if video section already exists
        let videoSection = document.getElementById('nova-video-section');

        if (!videoSection) {
          // Create video section HTML that matches site styling
          const videoHTML = `
            <div id="nova-video-section" style="
              width: 100%;
              max-width: 1200px;
              margin: 3rem auto;
              padding: 0 1rem;
              opacity: 0;
              animation: fadeIn 0.8s ease-in forwards;
            ">
              <div class="video-container" style="
                background: linear-gradient(135deg, rgba(139, 92, 246, 0.1) 0%, rgba(59, 130, 246, 0.1) 100%);
                border: 1px solid rgba(139, 92, 246, 0.2);
                border-radius: 24px;
                padding: 2rem;
                box-shadow: 0 10px 40px rgba(139, 92, 246, 0.1),
                            0 0 60px rgba(139, 92, 246, 0.05),
                            inset 0 0 40px rgba(139, 92, 246, 0.02);
                backdrop-filter: blur(20px);
                position: relative;
                overflow: hidden;
              ">
                <div style="
                  position: absolute;
                  top: -50%;
                  left: -50%;
                  width: 200%;
                  height: 200%;
                  background: radial-gradient(circle, rgba(139, 92, 246, 0.1) 0%, transparent 70%);
                  animation: pulse 4s ease-in-out infinite;
                "></div>
                <video
                  id="special-video"
                  controls
                  preload="metadata"
                  style="
                    width: 100%;
                    border-radius: 16px;
                    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
                    position: relative;
                    z-index: 1;
                    background: #000;
                  ">
                  <source src="https://vz-4cc39f27-a3f.b-cdn.net/0ca3b4ed-ed3d-48c6-bfd3-74fd9d86ec39/play_720p.mp4" type="video/mp4">
                  <source src="https://vz-4cc39f27-a3f.b-cdn.net/0ca3b4ed-ed3d-48c6-bfd3-74fd9d86ec39/play_480p.mp4" type="video/mp4">
                  Your browser does not support the video tag.
                </video>
                <div id="video-loading" style="
                  position: absolute;
                  top: 50%;
                  left: 50%;
                  transform: translate(-50%, -50%);
                  color: rgba(139, 92, 246, 0.8);
                  font-size: 14px;
                  display: none;
                ">Loading video...</div>
              </div>
            </div>
            <style>
              @keyframes fadeIn {
                from {
                  opacity: 0;
                  transform: translateY(20px);
                }
                to {
                  opacity: 1;
                  transform: translateY(0);
                }
              }
              @keyframes pulse {
                0%, 100% {
                  opacity: 0.3;
                  transform: scale(1);
                }
                50% {
                  opacity: 0.5;
                  transform: scale(1.1);
                }
              }
              #nova-video-section .video-container:hover {
                transform: translateY(-2px);
                box-shadow: 0 15px 50px rgba(139, 92, 246, 0.15),
                            0 0 80px rgba(139, 92, 246, 0.08),
                            inset 0 0 50px rgba(139, 92, 246, 0.03);
                transition: all 0.3s ease;
              }
            </style>
          `;

          // Find the best place to insert - look for common patterns
          const possibleTargets = [
            // Try to find buttons section
            document.querySelector('div[class*="button"]')?.parentElement,
            document.querySelector('a[href*="docs"]')?.parentElement?.parentElement,
            document.querySelector('button')?.parentElement?.parentElement,
            // Try to find hero section
            document.querySelector('h1')?.parentElement?.parentElement,
            document.querySelector('main > div > div'),
            // Look for flex containers that might contain the buttons
            ...Array.from(document.querySelectorAll('div')).filter(div => {
              const style = window.getComputedStyle(div);
              return style.display === 'flex' && style.gap && div.querySelector('a, button');
            })
          ].filter(Boolean);

          // Find the most likely container (usually contains buttons/links)
          let insertTarget = null;
          for (const target of possibleTargets) {
            if (target && (target.querySelector('a') || target.querySelector('button'))) {
              insertTarget = target;
              break;
            }
          }

          // If we found a good target, insert after it
          if (insertTarget) {
            // Look for the parent container of the buttons section
            let parentContainer = insertTarget.parentElement;
            while (parentContainer && parentContainer.id !== 'root') {
              if (parentContainer.children.length > 1) {
                // Found a container with multiple children, insert here
                insertTarget.insertAdjacentHTML('afterend', videoHTML);
                console.log('Video section injected after buttons section');
                break;
              }
              parentContainer = parentContainer.parentElement;
            }
          } else {
            // Fallback: insert at the beginning of root
            const rootDiv = document.getElementById('root');
            const firstChild = rootDiv?.firstElementChild;
            if (firstChild) {
              firstChild.insertAdjacentHTML('afterend', videoHTML);
              console.log('Video section injected in root (fallback)');
            }
          }
        } else {
          // Video section exists, make sure it's visible
          videoSection.style.display = 'block';
          console.log('Video section made visible');
        }
      } else {
        // Hide video if it exists
        const videoSection = document.getElementById('nova-video-section');
        if (videoSection) {
          videoSection.style.display = 'none';
          console.log('Video section hidden');
        }
      }
    } catch (error) {
      console.error('Error checking/injecting video:', error);
    }
  }

  // Initial delay to let React render
  setTimeout(checkAndInjectVideo, 1000);

  // Try again in case DOM changes
  setTimeout(checkAndInjectVideo, 2000);

  // Also listen for page visibility changes (tab switches)
  document.addEventListener('visibilitychange', () => {
    if (!document.hidden) {
      checkAndInjectVideo();
    }
  });
})();