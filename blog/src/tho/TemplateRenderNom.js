import React from 'react';

function renderNomVersion(nomTitle, nomPoem, sentencesPerPage) {
    const centerTextStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        fontFamily: 'Nom Na Tong, sans-serif',
        fontSize: '3vh',
    };

    const nomStyle = {
        fontSize: `${sentencesPerPage === 24 ? 1 : sentencesPerPage === 12 ? 1.5 : 1.25}em`,
        display: 'flex',
        flexDirection: 'row-reverse',
        fontFamily: 'Nom Na Tong, sans-serif',
        border: '1px solid #000',
        padding: '0.5em 0em',
        alignItems: 'center',
    };

    const pageContainerStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        position: 'relative',
    };

    const pageStyle = {
        border: '1px solid black',
        writingMode: 'vertical-rl',
        display: 'flex',
        alignItems: 'center',
    };

    const pageSeparatorStyle = {
        height: '9vh',
    };

    const nomSentences = nomPoem.split('\n').filter((sentence) => sentence.trim() !== '');
    const pageCount = Math.ceil(nomSentences.length / sentencesPerPage);

    return (
        <div style={centerTextStyle}>
            <div
                style={{
                    ...pageStyle, margin: '8vh 0 15vh 0',
                    fontSize: '2em',
                    padding: `0em ${sentencesPerPage === 24 || sentencesPerPage === 20 ? 35 : 30.5}vh`,
                    border: '2px solid black',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '80vh',
                    width: `${sentencesPerPage === 24 || sentencesPerPage === 20 ? 70 : 61}vh`
                }}>
                <table style={{ width: '100%', alignItems: 'center', justifyContent: 'center' }}>
                    <tbody><tr><td style={{...nomStyle, padding: '0.5em 0.1em'}}>{nomTitle}</td></tr></tbody>
                </table>
            </div>
            <div style={pageContainerStyle}>
                {Array.from({ length: pageCount * 2 }, (_, pageIndex) => (
                    <>
                        <div key={pageIndex} style={ pageIndex % 2 === 1 ? {...pageStyle, marginBottom: '15vh'} : pageStyle }>
                            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                                <tbody>
                                    {nomSentences
                                        .filter(
                                            (_, index) =>
                                                (index % 2 === 0 && 2 * Math.floor(index / sentencesPerPage) === pageIndex) ||
                                                (index % 2 !== 0 && 2 * Math.floor(index / sentencesPerPage) + 1 === pageIndex)
                                        )
                                        .map((sentence, index) => (
                                            <tr key={index}>
                                                <td style={{
                                                    ...nomStyle,
                                                    width: `${sentencesPerPage === 24 || sentencesPerPage === 20
                                                        ? 140 / sentencesPerPage : 122 / sentencesPerPage }vh` }}
                                                >
                                                    {sentence}
                                                </td>
                                            </tr>
                                        ))}

                                </tbody>

                            </table>
                                {pageIndex < pageCount * 2 && pageIndex % 2 !== 1 && (
                                     <tr>
                                        <td colSpan="1" style={pageSeparatorStyle}></td>
                                     </tr>
                                )}
                        </div>
                    </>
                ))}
            </div>
        </div>
    );
}

export default renderNomVersion;