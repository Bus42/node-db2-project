exports.up = async function (knex) {
    return knex('cars')
        .insert([
            {
                vin: '1HGCM8AJXFZ001234',
                make: 'Oldsmobile',
                model: '98 Regency',
                mileage: '420000',
                title: 'Salvage',
                transmission: 'Automatic',
            },
            {
                vin: '1HGCM8AJXFZ001235',
                make: 'Ford',
                model: 'Fusion',
                mileage: '12000',
                title: 'Clean',
            },
            {
                vin: '1HGCM8AJXFZ001236',
                make: 'Hyndai',
                model: 'Accent',
                mileage: '82000',
                transmission: 'Manual',
            }
        ]);
};

exports.down = async function (knex) {
    return knex.schema.dropTableIfExists('cars')
};
