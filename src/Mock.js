export const items = [
    {
        id: '1',
        title: 'PRIME Z690-A',
        category: '1',
        price: 22000,
        img:"./images/prime.png",
        text: 'La serie ASUS Prime está diseñada por expertos para liberar todo el potencial de los procesadores AMD e Intel. Con un diseño de energía robusto, soluciones de enfriamiento integrales y opciones de ajuste inteligentes.'
    },
    {
        id: '2',
        title: 'ProArt Z690-CREATOR WIFI',
        category: '1',
        price: 24500,
        img: "./images/proart.png",
        text: 'Cada aspecto de las tarjetas madre de la serie ProArt está diseñado para eliminar barreras y ofrecer un rendimiento óptimo a los creadores de contenido que trabajan en modelado y renderizado 3D, animación o producción de medios.'
    },
    {
        id: '3',
        title: 'Intel Core i7 6700K',
        category: '2',
        price: 40000,
        img:"./images/i7 6700k.png",
        text: '6th Generation Intel Core i7 Processors // Unlocked processor. Ddr4 & ddr3l support // Display resolution up to 4096x2304 // Intel turbo boost technology // Compatible with Intel 100 series chip set motherboards.'
    },
    {
        id: '4',
        title: 'AMD Ryzen 9 5950X',
        category: '2',
        price: 45000,
        img:"./images/ryzen 9.png",
        text: 'Procesador AMD Ryzen 9 5950X de Quinta Generación, 3.4GHz (hasta 4.9GHz), Socket AM4, 16 Núcleos con 32 Hilos, 105W.'
    },
    {
        id: '5',
        title: 'Intel Core i3 10100',
        category: '2',
        price: 32000,
        img:"./images/i3 10110.png",
        text: 'MICROPROCESADOR INTEL CORE I3 10100 COMETLAKE 4.3GHZ 4/8 6MB LGA1200.'
    },
    {
        id: '6',
        title: 'Ryzen 3 4100',
        category: '2',
        price: 35000,
        img:"./images/ryzen 3 4100.png",
        text: 'MICROPROCESADOR CPU AMD RYZEN 3 4100 4.0GHZ ZEN3.'
    },
    {
        id: '7',
        title: 'Intel Pentium G7400',
        category: '2',
        price: 28000,
        img:"./images/pentium g7400.png",
        text: 'MICROPROCESADOR INTEL PENTIUM G7400 LGA1700.'
    },
    {
        id: '8',
        title: 'Gigabyte B660M Aorus PRO',
        category: '1',
        price: 21000,
        img:"./images/mother gigabyte b660m.png",
        text: 'MOTHERBOARD GIGABYTE B660M AORUS PRO AX DDR4 M-ATX S1700.'
    },
    {
        id: '9',
        title: 'MSI PRO Z690-A',
        category: '1',
        price: 25000,
        img:"./images/msi pro z690-a.png",
        text: 'MOTHERBOARD MSI PRO Z690-A DDR5 S1700 12VA.'
    },
    {
        id: '10',
        title: 'Asus X570-PLUS',
        category: '1',
        price: 28000,
        img:"./images/mother asus x570-plus.png",
        text: 'MOTHERBOARD ASUS X570-PLUS WIFI TUF GAMING BOX ATX AM4.'
    }
]


export const getItems =  () => {
    return new Promise((resolve)  => {
        setTimeout(()  => {
            resolve(items)
        }, 200)
    })
    
}


export const getItemsbyId =  (id) => {
    return new Promise(resolve  => {
        setTimeout(()  => {
            resolve(items.find((items) => {
                return items.id === id
            } ))
        }, 200)
    })
    
}


export const getItemsbyCategory =  (categoryId) => {
    return new Promise((resolve)  => {
        setTimeout(()  => {
            resolve(items.filter(items => items.category === categoryId))
        },200 )
    })
}
