import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// make different types of operation related calls in project

const addProducts = async () => {
    const productCount = await prisma.product.count();

    if(productCount === 0) {
        await prisma.product.createMany({
            data: [
                {title: 'Product 1', price: 100, description: 'This is Product 1'},
                {title: 'Product 2', price: 200, description: 'This is Product 2'},
                {title: 'Product 3', price: 300, description: 'This is Product 3'}
            ]
        })
    }
}

addProducts();

export async function getProducts() {
    await new Promise(resolve => {
        setTimeout(() => {
            resolve('hello');
        },1000)
    })
    return prisma.product.findMany()
}

export async function getProductId(id: number) {
    await new Promise(resolve => {
        setTimeout(() => {
            resolve('hello');
        },1000)
    })
    return prisma.product.findUnique({
        where: {id}
    })
}

export async function addProduct(title: string, price: number, description: string) {
    await new Promise(resolve => {
        setTimeout(() => {
            resolve('hello');
        },1000)
    })
    return prisma.product.create({
        data:{title, price, description}
    })
}

export async function updateProduct(id: number, title: string, price: number, description: string) {
    await new Promise(resolve => {
        setTimeout(() => {
        resolve('hi')
        },1000)
    });
    return prisma.product.update({
        where: {id},
        data:{title, price, description}
    })
}

export async function deleteProduct(id: number) {
    await new Promise(resolve => {
        setTimeout(() => {
            resolve('delete');
        },1000)
    });
    return prisma.product.delete({
        where: {id}
    })
}
