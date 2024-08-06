import JSTestType from "../types/JSTestType";


const JSdata:JSTestType[] = [
    {
        initial_data: 'const arr1 = [1, 2, 3]',
        expected_result: '',
        task: 'what method to use to find out the length of arr1',
        variantA: '.lengnt',
        variantB: '.indexOf(2)',
        variantC: '.lengnt()',
        variantD: '.size()',
        variantE: '',
        variantF: '',
        correctAnswer: '.lengnt',
        additional_task: 'what will be the length of the arr1',
        add_variantA: '1',
        add_variantB: '2',
        add_variantC: '3',
        add_variantD: '4',
        add_variantE: '',
        add_variantF: '',
        correctAdditionalAnswer: '3',
        example: 'arr1.length',
        level: 'easy',

    },
    {
        initial_data: 'const arr1 = [3, 1, 2]',
        expected_result: 'arr1 = [1, 2, 3]',
        task: '',
        variantA: '.length',
        variantB: '.byLength',
        variantC: '.sortMin()',
        variantD: '.sort()',
        variantE: '.bylength',
        variantF: '.lenth',
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

    },
]

export default JSdata;