import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  *{
    margin:0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Inter",sans-serif;
    transition: all 0.4s linear;
  }
  :root{
    font-size: 16px;
  }
  html{
    scroll-behavior: smooth;
  }
  body{
    font-weight: ${({ theme }) => theme.fontWeight.medium};
    background-color:  ${({ theme }) => theme.colors.background};
    overflow-x: hidden;
    
  }
  body::-webkit-scrollbar {
    width: 10px;
  }
  body::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.secundary};
  }
  body::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.primary};
    border-radius: 1.25rem;
    border: 1px solid ${({ theme }) => theme.colors.primary};
  }
  ul,li{
    list-style: none;
  }
  a{
    text-decoration: none;
  }
  h1,h2,h3,h4,h5,h6{
    transition: color 0.2s linear;
  }
  img{
    user-select: none;
  }
  
`

export default GlobalStyle
