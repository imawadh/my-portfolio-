import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);

    // Dynamic params
    const hasTitle = searchParams.has('title');
    const title = hasTitle
      ? searchParams.get('title')?.slice(0, 100)
      : 'Awadh Kishor Singh | Full Stack Developer';
      
    const description = searchParams.get('description') || 'Building scalable web applications and intuitive user interfaces.';

    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'center',
            backgroundColor: '#080808',
            padding: '80px',
            position: 'relative',
          }}
        >
          {/* Background Glows */}
          <div
            style={{
              position: 'absolute',
              top: '-20%',
              left: '-10%',
              width: '50%',
              height: '50%',
              background: 'radial-gradient(circle, rgba(255,191,70,0.15) 0%, transparent 60%)',
            }}
          />
          <div
            style={{
              position: 'absolute',
              bottom: '-20%',
              right: '-10%',
              width: '50%',
              height: '50%',
              background: 'radial-gradient(circle, rgba(102,206,214,0.15) 0%, transparent 60%)',
            }}
          />
          
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '20px',
            }}
          >
            <div
              style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                backgroundColor: '#ffbf46',
                marginRight: '12px',
              }}
            />
            <span style={{ fontSize: 24, color: '#ffbf46', letterSpacing: '0.1em', fontWeight: 'bold', textTransform: 'uppercase' }}>
              imawadh
            </span>
          </div>

          <h1
            style={{
              fontSize: title.length > 50 ? 56 : 72,
              fontFamily: 'sans-serif',
              fontWeight: 900,
              color: 'white',
              lineHeight: 1.1,
              marginBottom: '30px',
              maxWidth: '900px',
            }}
          >
            {title}
          </h1>
          
          <p
            style={{
              fontSize: 32,
              color: '#888888',
              fontFamily: 'sans-serif',
              maxWidth: '850px',
              lineHeight: 1.4,
            }}
          >
            {description}
          </p>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              position: 'absolute',
              bottom: '80px',
              left: '80px',
            }}
          >
            <span style={{ fontSize: 28, color: 'white', fontWeight: 'bold' }}>awadh.tech</span>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (e) {
    console.error(e);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
