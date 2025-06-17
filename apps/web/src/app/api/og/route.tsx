import { ImageResponse } from 'next/og';
import { NextRequest } from 'next/server';

export const runtime = 'edge';

export async function GET(request: NextRequest) {
    try {
        const { searchParams } = new URL(request.url);
        const title = searchParams.get('title') || 'Ryan Van Valkenburg';
        const subtitle = searchParams.get('subtitle') || 'Full-Stack Developer';
        const type = searchParams.get('type') || 'default'; // 'project', 'page', 'default'
        const tech = searchParams.get('tech')?.split(',') || [];

        // Retro color palette
        const colors = {
            background: '#0a0a0a', // Very dark background
            primary: '#00ff9f', // Bright cyan-green
            accent: '#ff6b35', // Bright orange
            secondary: '#6366f1', // Indigo
            text: '#ffffff',
            muted: '#64748b',
            grid: '#1a1a1a',
        };

        return new ImageResponse(
            (
                <div
                    style={{
                        height: '100%',
                        width: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                        justifyContent: 'space-between',
                        backgroundColor: colors.background,
                        position: 'relative',
                        fontFamily: 'monospace',
                        overflow: 'hidden',
                    }}
                >
                    {/* Grid Background */}
                    <div
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            backgroundImage: `
                linear-gradient(${colors.grid} 1px, transparent 1px),
                linear-gradient(90deg, ${colors.grid} 1px, transparent 1px)
              `,
                            backgroundSize: '40px 40px',
                            opacity: 0.3,
                        }}
                    />

                    {/* Scanlines Effect */}
                    <div
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            backgroundImage: `linear-gradient(transparent 50%, ${colors.primary}08 50%)`,
                            backgroundSize: '100% 4px',
                        }}
                    />

                    {/* Header */}
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            width: '100%',
                            padding: '40px 60px',
                            zIndex: 10,
                        }}
                    >
                        <div
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '20px',
                            }}
                        >
                            <div
                                style={{
                                    width: '12px',
                                    height: '12px',
                                    backgroundColor: colors.primary,
                                    borderRadius: '50%',
                                    boxShadow: `0 0 20px ${colors.primary}`,
                                }}
                            />
                            <span
                                style={{
                                    color: colors.primary,
                                    fontSize: '24px',
                                    fontWeight: 600,
                                    textShadow: `0 0 10px ${colors.primary}`,
                                    fontFamily: 'monospace',
                                }}
                            >
                                &gt;_
                            </span>
                        </div>

                        {type === 'project' && (
                            <div
                                style={{
                                    backgroundColor: colors.accent,
                                    color: colors.background,
                                    padding: '8px 16px',
                                    borderRadius: '4px',
                                    fontSize: '16px',
                                    fontWeight: 600,
                                    textTransform: 'uppercase',
                                }}
                            >
                                PROJECT
                            </div>
                        )}
                    </div>

                    {/* Main Content */}
                    <div
                        style={{
                            flex: 1,
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'flex-start',
                            padding: '0 60px',
                            zIndex: 10,
                            maxWidth: '800px',
                        }}
                    >
                        {/* Terminal Prompt */}
                        <div
                            style={{
                                color: colors.muted,
                                fontSize: '20px',
                                marginBottom: '20px',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '10px',
                                fontFamily: 'monospace',
                            }}
                        >
                            <span style={{ color: colors.primary, textShadow: `0 0 8px ${colors.primary}` }}>&gt;_</span>
                            <span>cat {type === 'project' ? 'project_info.json' : 'profile.txt'}</span>
                            <span style={{
                                color: colors.primary,
                                fontSize: '18px',
                                opacity: 0.8,
                                marginLeft: '10px'
                            }}>█</span>
                        </div>

                        {/* Title */}
                        <h1
                            style={{
                                fontSize: type === 'project' ? '64px' : '72px',
                                fontWeight: 700,
                                color: colors.text,
                                margin: '0 0 20px 0',
                                lineHeight: 1.1,
                                textShadow: `2px 2px 0px ${colors.primary}40`,
                                maxWidth: '100%',
                                wordBreak: 'break-word',
                            }}
                        >
                            {title}
                        </h1>

                        {/* Subtitle */}
                        <p
                            style={{
                                fontSize: '32px',
                                color: colors.accent,
                                margin: '0 0 40px 0',
                                fontWeight: 500,
                                textShadow: `0 0 10px ${colors.accent}40`,
                            }}
                        >
                            {subtitle}
                        </p>

                        {/* Technologies (for projects) */}
                        {type === 'project' && tech.length > 0 && (
                            <div
                                style={{
                                    display: 'flex',
                                    flexWrap: 'wrap',
                                    gap: '12px',
                                    marginTop: '20px',
                                }}
                            >
                                {tech.slice(0, 4).map((t, i) => (
                                    <div
                                        key={i}
                                        style={{
                                            backgroundColor: `${colors.secondary}20`,
                                            border: `2px solid ${colors.secondary}`,
                                            color: colors.secondary,
                                            padding: '8px 16px',
                                            borderRadius: '6px',
                                            fontSize: '18px',
                                            fontWeight: 500,
                                            boxShadow: `0 0 10px ${colors.secondary}40`,
                                        }}
                                    >
                                        {t.trim()}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Footer */}
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            width: '100%',
                            padding: '40px 60px',
                            zIndex: 10,
                        }}
                    >
                        <div
                            style={{
                                color: colors.muted,
                                fontSize: '20px',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '10px',
                            }}
                        >
                            <div
                                style={{
                                    width: '8px',
                                    height: '8px',
                                    backgroundColor: colors.accent,
                                    borderRadius: '50%',
                                }}
                            />
                            rv2.dev
                        </div>

                        <div
                            style={{
                                color: colors.primary,
                                fontSize: '18px',
                                opacity: 0.8,
                            }}
                        >
                            █▌▌░░ LOADING...
                        </div>
                    </div>

                    {/* Glitch Effect Lines */}
                    <div
                        style={{
                            position: 'absolute',
                            top: '25%',
                            right: '0',
                            width: '100px',
                            height: '2px',
                            backgroundColor: colors.primary,
                            opacity: 0.6,
                            boxShadow: `0 0 10px ${colors.primary}`,
                        }}
                    />
                    <div
                        style={{
                            position: 'absolute',
                            top: '45%',
                            right: '20px',
                            width: '150px',
                            height: '1px',
                            backgroundColor: colors.accent,
                            opacity: 0.4,
                            boxShadow: `0 0 8px ${colors.accent}`,
                        }}
                    />
                </div>
            ),
            {
                width: 1200,
                height: 630,
            }
        );
    } catch (e) {
        console.log('Failed to generate OG image:', e);
        return new Response('Failed to generate the image', {
            status: 500,
        });
    }
} 