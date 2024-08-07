import JSTestType from "../types/JSTestType";


const JSdata:JSTestType[] = [
    {
        initial_data: 'const arr1 = [1, 2, 3]',
        expected_result: '',
        task: 'what method to use to find out the length of arr1?',
        variantA: '.length',
        variantB: '.indexOf(2)',
        variantC: '.length()',
        variantD: '.size()',
        variantE: '.lenth',
        variantF: 'length(arr1)',
        correctAnswer: '.length',
        additional_task: 'what is the length of the arr1?',
        add_variantA: '1',
        add_variantB: '2',
        add_variantC: '3',
        add_variantD: '4',
        add_variantE: '5',
        add_variantF: '6',
        correctAdditionalAnswer: '3',
        example: 'arr1.length',
        level: 'easy',
        category: 'array methods',

    },
    {
        initial_data: 'const arr1 = [3, 1, 2]',
        expected_result: 'arr1 = [1, 2, 3]',
        task: 'how to get the expected result?',
        variantA: '.length',
        variantB: '.byLength',
        variantC: '.sortMin()',
        variantD: '.sort()',
        variantE: '',
        variantF: '',
        correctAnswer: '.sort()',
        additional_task: '',
        add_variantA: '',
        add_variantB: '',
        add_variantC: '',
        add_variantD: '',
        add_variantE: '',
        add_variantF: '',
        correctAdditionalAnswer: '',
        example: 'arr1.sort()',
        level: 'easy',
        category: 'array methods',

    },
]

export default JSdata;