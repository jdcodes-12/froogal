export const getColorPerFinanceMode = (color) => {
    switch (color) {
        case 'weekly':
            return 'purple'
        case 'monthly':
            return 'green';
        case 'annual':
            return 'orange';
        default: 
            return 'purple';
    }
}