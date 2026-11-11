import React, { useState } from "react";
function Entry({ index, entry }) {
    return (<>
        <section>
            <h2>* {entry.context} *</h2>
            <p>{entry.explanation}</p>
        </section>
    </>)
}

export default Entry;