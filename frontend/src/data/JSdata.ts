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
    {
        initial_data: 'const arr1 = ["a", "b", "c"]',
        expected_result: '',
        task: 'what method to use to add symbol "d" to the end of arr1?',
        variantA: '.shift(D)',
        variantB: '.push(d)',
        variantC: '.pop("D")',
        variantD: '.push(4)',
        variantE: '.push("d")',
        variantF: '.shift(4)',
        correctAnswer: '.push("d")',
        additional_task: '',
        add_variantA: '',
        add_variantB: '',
        add_variantC: '',
        add_variantD: '',
        add_variantE: '',
        add_variantF: '',
        correctAdditionalAnswer: '',
        example: 'arr1.push("d")',
        level: 'easy',
        category: 'array methods',

    },
    {
        initial_data: 'const arr1 = ["a", "b", "c"]',
        expected_result: 'arr1 = ["D", "a", "b", "c"]',
        task: 'how to get the expected result?',
        variantA: '.shift("D")',
        variantB: '.push("d")',
        variantC: '.add("D")',
        variantD: '.unshift(d)',
        variantE: '.unshift("d")',
        variantF: '.unshift("D")',
        correctAnswer: '.unshift("D")',
        additional_task: '',
        add_variantA: '',
        add_variantB: '',
        add_variantC: '',
        add_variantD: '',
        add_variantE: '',
        add_variantF: '',
        correctAdditionalAnswer: '',
        example: 'arr1.unshift("D")',
        level: 'easy',
        category: 'array methods',

    },
    {
        initial_data: 'const arr1 = ["300", "7", "40"].sort()',
        expected_result: '',
        task: 'console.log(arr1)',
        variantA: '["300", "7", "40"]',
        variantB: '["7", "300", "40"]',
        variantC: '["300", "40", "7"]',
        variantD: '["7", "40", "300"]',
        variantE: '',
        variantF: '',
        correctAnswer: '["300", "40", "7"]',
        additional_task: '',
        add_variantA: '',
        add_variantB: '',
        add_variantC: '',
        add_variantD: '',
        add_variantE: '',
        add_variantF: '',
        correctAdditionalAnswer: '',
        example: 'console.log(arr1)',
        level: 'easy',
        category: 'array methods',
    },
    {
        initial_data: 'const arr1 = ["Mike", "Billy", "Bobby", "Ann"].sort()',
        expected_result: '',
        task: 'console.log(arr1)',
        variantA: '["Ann", "Bobby", "Billy", "Mike"]',
        variantB: '["Ann", "Billy", "Bobby", "Mike"]',
        variantC: '["Mike", "Bobby", "Billy", "Ann"]',
        variantD: '["Mike", "Billy", "Bobby", "Ann"]',
        variantE: '',
        variantF: '',
        correctAnswer: '["Ann", "Billy", "Bobby", "Mike"]',
        additional_task: '',
        add_variantA: '',
        add_variantB: '',
        add_variantC: '',
        add_variantD: '',
        add_variantE: '',
        add_variantF: '',
        correctAdditionalAnswer: '',
        example: 'console.log(arr1)',
        level: 'easy',
        category: 'array methods',
    },
    {
        initial_data: 'const arr1 = ["Mike", "1", "Mike", "Ann"].reverse()',
        expected_result: '',
        task: 'console.log(arr1)',
        variantA: '["Ann", "Mike", "1", "Mike"]',
        variantB: '["Ann", "Mike", "Mike", "1"]',
        variantC: '["Ann", "Mile", "1", "Mike"]',
        variantD: '["Mike", "Mike", "Ann", "1"]',
        variantE: '["1", "Ann", "Mike", "Mike"]',
        variantF: '["1", "Mike", "Mike", "Ann"]',
        correctAnswer: '["Ann", "Mike", "1", "Mike"]',
        additional_task: '',
        add_variantA: '',
        add_variantB: '',
        add_variantC: '',
        add_variantD: '',
        add_variantE: '',
        add_variantF: '',
        correctAdditionalAnswer: '',
        example: 'console.log(arr1)',
        level: 'easy',
        category: 'array methods',
    },
]

export default JSdata;