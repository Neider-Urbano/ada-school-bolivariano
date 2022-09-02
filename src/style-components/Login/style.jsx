import styled from "styled-components";
import tw from "twin.macro";

export const Section = styled.section`
    ${tw`h-full bg-gray-200 md:h-screen`};
`;

export const Input = styled.input`
    ${tw`block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none`};
`;

export const Button = styled.button`
    ${tw`inline-block px-6 py-2.5 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3`};
`;

export const ButtonDanger = styled.button`
    ${tw`inline-block px-6 py-2 border-2 border-red-600 text-red-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out`};
`;
