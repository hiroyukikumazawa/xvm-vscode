import { KeywordDescription } from '../types';

export const keywordDescriptions: KeywordDescription = {
    // Control Flow
    'if': 'Conditional statement for branching code execution',
    'else': 'Alternative branch of an if statement',
    'for': 'Loop construct with initialization, condition, and increment',
    'while': 'Loop that executes while a condition is true',
    'foreach': 'Loop that iterates over elements in a collection',
    'in': 'Used with foreach to specify the collection to iterate over',
    'return': 'Exit from a function and optionally return a value',
    'continue': 'Skip to the next iteration of a loop',

    // Type Declaration
    'fn': 'Function declaration keyword',
    'struct': 'Define a composite data type',
    'const': 'Declare a constant value',
    'let': 'Declare a variable',

    // Entry Point
    'entry': 'Marks the entry point of the program',

    // Types
    'bool': 'Boolean type that can be true or false',
    'u8': '8-bit unsigned integer (0 to 255)',
    'u32': '32-bit unsigned integer',
    'u64': '64-bit unsigned integer',
    'string': 'Text string type',
    'optional': 'Type that can contain a value or be null',

    // Values
    'true': 'Boolean true value',
    'false': 'Boolean false value',
    'null': 'Represents the absence of a value'
};