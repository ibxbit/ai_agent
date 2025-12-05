import { openai } from './ai'

export const runLLM = async ({
    useMessage,
}: {
    useMessage: string,
}) => {
    const response = await openai.chat.completions.create({
        model: 'gpt-4o-mini',
        messages: [
            {
                role: 'user',
                content: useMessage,
            },
        ],
    })
    return response.choices[0].message.content
}