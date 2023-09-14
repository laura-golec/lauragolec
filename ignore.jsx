<div style={{ position: 'relative', height: '93vh', display: 'block', width: '100vw' }}>
    {/* Blue wave and rectangle*/}
    <div style={{ position: 'absolute', height: '93vh', display: 'block', alignItems: 'end', bottom: '0', zIndex: '1', width: '100%' }}>
        <div style={{ height: '93vh', display: 'flex', flexDirection: 'column', alignItems: 'flex-end', width: '100%' }}>
            {/* Blue wave */}
            <div
                style={{
                    width: '100%',
                    height: '10vh', // Height of the blueish wave
                }}
            >
                <div className="hero_area">
                    <svg
                        className="waves bigWave"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        viewBox="0 24 150 28"
                        preserveAspectRatio="none"
                        shapeRendering="auto"
                    >
                        {/* SVG Content */}
                        <defs>
                            <path
                                id="gentle-wave"
                                d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
                            />
                        </defs>
                        <g className="parallax">
                            <use xlinkHref="#gentle-wave" x={48} y={0} fill="rgba(210, 224, 239, 0.5)" />
                            <use xlinkHref="#gentle-wave" x={48} y={3} fill="rgba(210, 224, 239, 0.3)" />
                            <use xlinkHref="#gentle-wave" x={48} y={5} fill="rgba(210, 224, 239, 0.1)" />
                            <use xlinkHref="#gentle-wave" x={48} y={7} fill="rgba(210, 224, 239, 0.7)" />
                        </g>
                    </svg>
                </div>
            </div>


            {/* Blue rectangle */}
            <div
                style={{
                    left: '0',
                    width: '100%',
                    height: '40vh', // Remaining screen height below the greenish wave
                    backgroundColor: 'rgba(210, 224, 239, 0.9)', // Match wave color with 0.9 alpha
                }}
            ></div>
        </div>
    </div>


    {/* Green wave and rectangle*/}
    <div style={{ position: 'absolute', height: '93vh', display: 'block', alignItems: 'end', bottom: '0', zIndex: '2', width: '100%' }}>
        <div style={{ height: '93vh', display: 'flex', flexDirection: 'column', alignItems: 'flex-end', width: '100%' }}>
            {/* Green wave */}
            <div
                style={{
                    width: '100%',
                    height: '15vh', // Height of the greenish wave
                }}
            >
                <div className="hero_area">
                    <svg
                        className="waves smallWave"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        viewBox="0 24 150 28"
                        preserveAspectRatio="none"
                        shapeRendering="auto"
                    >
                        {/* SVG Content */}
                        <defs>
                            <path
                                id="gentle-wave"
                                d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
                            />
                        </defs>
                        <g className="parallax">
                            <use xlinkHref="#gentle-wave" x={48} y={0} fill="rgba(65, 180, 122,0.5)" />
                            <use xlinkHref="#gentle-wave" x={48} y={3} fill="rgba(65, 180, 122,0.3)" />
                            <use xlinkHref="#gentle-wave" x={48} y={5} fill="rgba(65, 180, 122,0.1)" />
                            <use xlinkHref="#gentle-wave" x={48} y={7} fill="rgba(65, 180, 122,0.7)" />
                        </g>
                    </svg>
                </div>
            </div>

            {/* Green rectangle */}

            <div
                style={{
                    left: '0',
                    width: '100%',
                    zIndex: '2',
                    height: '5vh', // Remaining screen height below the blueish wave
                    backgroundColor: 'rgba(65, 180, 122, 0.9)', // Match wave color with 0.9 alpha
                }}
            ></div>

        </div>
    </div>
</div>