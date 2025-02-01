import React, { useState } from 'react';


interface IWordCounterProps {
}

const WordCounter: React.FunctionComponent<IWordCounterProps> = () => {
    const [text, setText] = useState<string>('');

    const countWords = (text: string): number => {
        if (text.trim() === '') {
            return 0;
        }
        return text.trim().split(/\s+/).length;
    };

    return (
        <>
            <div style={{ margin: '20px', fontFamily: 'Arial, sans-serif' }}>
                <textarea
                    value={text}
                    className="form-control w-100 p-2 fs-4"
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Your text is here..."
                    rows={7}
                    cols={50}
                    style={{resize: "none"}}
                />
                <p className='mt-2 fs-5' >
                    Number of words: <strong>{countWords(text)}</strong>
                </p>
                <p className='mt-2 fs-5' >
                    Number of symbols: <strong>{text.length}</strong>
                </p>
            </div>
        </>
    );
}
export default WordCounter;