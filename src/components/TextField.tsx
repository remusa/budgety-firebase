import React, { useRef, useState } from 'react'

interface Person {
    firstName: string
    lastName: string
}

interface Props {
    text: String
    ok?: boolean
    i?: number
    fn?: (bob: string) => string
    person: Person
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

interface TextNode {
    text: string
}

const TextField: React.FC<Props> = ({handleChange}) => {
    const [count, setCount] = useState<TextNode>({text: 'string'})
    const inputRef = useRef<HTMLInputElement>(null)
    const divRef = useRef<HTMLDivElement>(null)

    return (
        <div ref={divRef}>
            <input ref={inputRef} onChange={handleChange}></input>
        </div>
    )
}

export default TextField
