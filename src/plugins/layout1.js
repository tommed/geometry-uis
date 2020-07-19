export default {
    squareSize: 100,

    // animations
    animations: [
        {
            group: 'spin',
            type: 'spin',
            rate: 90,
        },
    ],

    matrix: [

        // row: 0
        [
            { type: 'Fill', color: 0 },
            { type: 'Fill', color: 1 },
            { type: 'ThumbRight', color: 1, innerColor: 0 },
            { type: 'ThumbLeft', color: 3, innerColor: 5 },
            { type: 'Fill', color: 3 },
            { type: 'SemiLeft', color: 3 },
        ],

        // row: 1
        [
            { type: 'SemiTop', color: 0 },
            { type: 'CircleWithStroke', color: 1, innerColor: 2 },
            { type: 'PlainCircle', color: 4 },
            { type: 'Blank' },
            { type: 'Blank' },
            { type: 'Blank' },
            { type: 'Blank' },
            { type: 'Blank' },
            { type: 'CircleTailed', color:3, tail: 'bottom-right', animationGroups: ['spin'] },
            { type: 'CircleTailed', color:1, tail: 'bottom-left', animationGroups: ['spin'] },
        ],

        // row: 3
        [
            { type: 'CircleTailed', color:3, tail: 'bottom-right', animationGroups: ['spin'] },
            { type: 'Blank' },
            { type: 'CircleTailed', color:3, tail: 'top-left', animationGroups: ['spin'] },
            { type: 'Blank' },
            { type: 'Blank' },
            { type: 'StripesBR', colors: [1,3,2] },
            { type: 'StripesBL', colors: [1,3,2] },
            { type: 'Blank' },
            { type: 'CircleTailed', color:3, tail: 'top-right', animationGroups: ['spin'] },
            { type: 'CircleTailed', color:1, tail: 'top-left', animationGroups: ['spin'] },
        ],

        // empty row: 4
        [
            { type: 'Blank' },
            { type: 'SemiRight', color: 1 },
            { type: 'Fill', color: 1 },
            { type: 'Fill', color: 1 },
            { type: 'Fill', color: 1 },
            { type: 'SemiLeft', color: 1 },
        ],

        // row: 5
        [
            { type: 'SmallTriangle', color:0, bgColor: 1 },
            { type: 'HalfTriangle', color: 3, color2: 4 },
            { type: 'HalfTriangle2', color: 3, color2: 4 },
            { type: 'Blank' },
            { type: 'CircleTailed', color:2, tail: 'top-right', animationGroups: ['spin'] },
        ],

        // row: 6
        [
            { type: 'Blank' },
            { type: 'HalfTriangle2', color: 4, color2: 3 },
            { type: 'HalfTriangle', color: 4, color2: 2 },
            { type: 'HalfTriangle2', color: 5, color2: 2 },
            { type: 'Blank' },
            { type: 'Blank' },
            { type: 'HalfTriangle2', color: 3, color2: 5 },
            { type: 'HalfTriangle', color: 4, color2: 3 },
        ],

        // row: 7
        [
            { type: 'HalfTriangle2', color: 3, color2: 5 },
            { type: 'Blank' },
            { type: 'ThumbLeft', color: 1, innerColor: 2 },
            { type: 'Fill', color: 1 },
            { type: 'SemiLeft', color: 1 },
            { type: 'Blank' },
            { type: 'ThumbLeft', color: 3, innerColor: 1 },
            { type: 'Fill', color: 3 },
            { type: 'SemiLeft', color: 3 },
            { type: 'ThumbLeft', color: 3, innerColor: 1 },
        ],

        // row: 8
        [
            { type: 'CircleWithStroke', color: 3, innerColor: 2 },
            { type: 'Blank' },
            { type: 'Blank' },
            { type: 'StripesBL', colors: [4,5,3] },
            { type: 'Blank' },
            { type: 'StripesBR', colors: [4,5,3] },
        ],

        // row: 9
        [
            { type: 'HalfTriangle2', color: 2, color2: 5 },
            { type: 'CircleWithStroke', color: 1, innerColor: 3 },
            { type: 'Blank' },
            { type: 'SmallTriangle', color: 3, bgColor: 4 },
            { type: 'Blank' },
            { type: 'SmallTriangle', color: 3, bgColor: 2 },
            { type: 'CircleTailed', color: 3, tail: 'top-left', animationGroups: ['spin'] },
        ],

        // row: 10
        [
            { type: 'Blank' },
            { type: 'HalfTriangle2', color: 2, color2: 1 },
            { type: 'Blank' },
            { type: 'Blank' },
            { type: 'Blank' },
            { type: 'Blank' },
            { type: 'SemiRight', color: 1 },
            { type: 'Fill', color: 1 },
            { type: 'Fill', color: 1 },
            { type: 'ThumbRight', color: 1, innerColor: 4 },
        ], 
        
        // row: 11
        [
            { type: 'Fill', color: 4 },
            { type: 'Blank' },
            { type: 'Blank' },
            { type: 'Blank' },
            { type: 'Blank' },
            { type: 'Blank' },
            { type: 'StripesBR', colors: [3,1,4] },
        ], 
        
        // row: 12
        [
            { type: 'Fill', color: 4 },
            { type: 'HalfTriangle', color: 2, color2: 5 },
            { type: 'Blank' },
            { type: 'StripesBR', colors: [4,5,3] },
            { type: 'StripesBL', colors: [4,5,3] },
        ],

        // row: 13
        [
            { type: 'HalfTriangle2', color: 2, color2: 5 },
            { type: 'Blank' },
            { type: 'Blank' },
            { type: 'Blank' },
            { type: 'Blank' },
            { type: 'CircleTailed', color: 4, tail: 'top-left' },
            { type: 'CircleWithStroke', color: 2, innerColor: 3 },
        ],

    ],
};