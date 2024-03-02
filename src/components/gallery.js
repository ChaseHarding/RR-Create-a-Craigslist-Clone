import React from 'react'
import Posting from './posting'
import { postings } from '../postings'

function Gallery() {
    return (
        <div>
            <h1>Gallery</h1>
            {/* <h2>Posting</h2> */}
            {postings.map((posting, index) => (
                <Posting key={index} posting={posting} />
            ))}
        </div>
    )
}

export default Gallery