import styled from "styled-components";
import tw from "twin.macro";

export const Label = styled.label`
    ${tw`inline-block mb-2 text-gray-700`};
`;

export const Select = styled.select`
    ${tw`appearance-none block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none`};
`;

export const Input = styled.input`
    ${tw`block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none`};
`;

export const DivForm = styled.div`
    ${tw`block p-6 rounded-lg shadow-md bg-white max-w-sm md:max-w-md border border-gray-300`};
`;

export const ButtonCreate = styled.button`
    ${tw`px-20 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out`};
`;