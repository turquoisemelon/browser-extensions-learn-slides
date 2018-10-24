// export { default as theme } from './theme'
import theme from 'mdx-deck/themes'

export default {
    ...theme,
    li: {
        textAlign: 'left',
        fontSize: '2.5rem',
        listStyle: 'none',
        padding: '0 0 2rem 0'
    }
}