"use client";

import { useRef, useState } from "react";

const Logger = () => {
    const [loggedData, setLoggedData] = useState<string[]>([]);
    const [textValue, setTextValue] = useState<string>();

    const appendLogs = (...value: string[]) => {
        setLoggedData([...value, ...loggedData]);
    };

    const keyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.repeat) return;
        appendLogs(`Key down: ${e.key}`);
    };

    const keyUp = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        appendLogs(`Key up: ${e.key}`);
    };

    const clearData = () => {
        setLoggedData([]);
        setTextValue("");
    };

    return (
        <div className={`h-3/4 w-5/6 flex flex-col justify-stretch gap-2`}>
            <div className={`absolute`}>
                <h1 className="relative -top-12 -left-10 text-6xl font-bold -z-10 text-slate-800">
                    ACTION LOGGER
                </h1>
            </div>
            <div className={`flex flex-row gap-4 grow min-h-0 *:grow *:basis-0`}>
                <textarea
                    name="Consumer"
                    id="textarea-consumer"
                    className={`consumer`}
                    onKeyDown={keyDown}
                    onKeyUp={keyUp}
                    value={textValue}
                    onChange={(t) => setTextValue(t.target.value)}
                ></textarea>
                <pre className={`logger overflow-y-auto`}>{loggedData.join("\n")}</pre>
            </div>
            <div className={`flex gap-2`}>
                <button className="button" onClick={clearData}>
                    Clear
                </button>
            </div>
        </div>
    );
};

export default Logger;
