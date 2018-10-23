import React from 'react';
import { Appear } from 'mdx-deck' 

export const AppearList = () => {
    return (
    <ul style={{ listStyle: 'none'}}>
        <Appear>
            <li>manifest.json</li><br/>
            <li>Popup UI</li><br/>
            <li>Content Script</li><br/>
            <li>Background Script</li><br/>
            <li>Options Page</li>
        </Appear>
    </ul>)
}