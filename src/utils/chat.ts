import cors from 'cors';

app.use(cors({ origin: 'https://*.my.site.com' })); // or '*'

function loadExternalScript(src: string): Promise<void> {
  return new Promise(resolve => {
    const script = document.createElement('script');
    script.src = src;
    script.onload = () => resolve();
    // script.onerror = () => error();
    document.head.appendChild(script);
  });
}

function initEmbeddedMessaging() {
  try {
    embeddedservice_bootstrap.settings.language = 'fr'; // For example, enter 'en' or 'en-US'

    embeddedservice_bootstrap.init(
      '00DAa00000DW4fJ',
      'CEE_B2B2C',
      'https://crmsiplec--int.sandbox.my.site.com/ESWCEEB2B2C1746022109468',
      {
        scrt2URL: 'https://crmsiplec--int.sandbox.my.salesforce-scrt.com'
      }
    );
  } catch (err) {
    Console.error('Error loading Embedded Messaging: ', err);
  }
}

export async function launchChat() {
  await loadExternalScript(
    'https://crmsiplec--int.sandbox.my.site.com/ESWCEEB2B2C1746022109468/assets/js/bootstrap.min.js'
  );
  initEmbeddedMessaging();
}
