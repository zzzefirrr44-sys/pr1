const output = document.getElementById("output");

function showResult(title, data) {
    output.textContent = title + "\n\n" + JSON.stringify(data, null, 2);
}


// ==================== ЗАВДАННЯ 1 ====================

const products = [
    {
        name: "Ноутбук Lenovo",
        category: "Ноутбуки",
        price: 28000,
        inStock: 5
    },
    {
        name: "Миша Logitech",
        category: "Периферія",
        price: 1200,
        inStock: 12
    },
    {
        name: "Клавіатура HyperX",
        category: "Периферія",
        price: 3500,
        inStock: 0
    },
    {
        name: "Монітор Samsung",
        category: "Монітори",
        price: 9500,
        inStock: 3
    },
    {
        name: "Навушники JBL",
        category: "Аудіо",
        price: 4200,
        inStock: 0
    }
];

function getAvailableProducts() {
    return products.filter(product => product.inStock > 0);
}

function findProductByName(name) {
    const product = products.find(
        product => product.name.toLowerCase() === name.toLowerCase()
    );

    return product || "Товар не знайдено";
}

function task1() {
    const availableProducts = getAvailableProducts();

    const productName = prompt(
        "Введіть назву товару:\n\n" +
        products.map(product => product.name).join("\n")
    );

    const foundProduct = findProductByName(productName || "");

    showResult("Доступні товари:\n" + JSON.stringify(availableProducts, null, 2) +
        "\n\nРезультат пошуку:\n" + JSON.stringify(foundProduct, null, 2));
}


// ==================== ЗАВДАННЯ 2 ====================

const students = [
    {
        name: "Олександр",
        age: 18,
        grade: 91,
        group: "ПІ-23-01"
    },
    {
        name: "Марія",
        age: 19,
        grade: 87,
        group: "ПІ-23-02"
    },
    {
        name: "Захарій",
        age: 18,
        grade: 95,
        group: "ПІ-23-03"
    },
    {
        name: "Андрій",
        age: 19,
        grade: 78,
        group: "ПІ-23-01"
    },
    {
        name: "Анна",
        age: 18,
        grade: 93,
        group: "ПІ-23-02"
    },
    {
        name: "Максим",
        age: 19,
        grade: 82,
        group: "ПІ-23-03"
    }
];

function groupBy(students) {
    return students.reduce((groups, student) => {
        if (!groups[student.group]) {
            groups[student.group] = [];
        }

        groups[student.group].push(student);

        return groups;
    }, {});
}

function sortStudentsByGrade(students) {
    return [...students].sort((a, b) => b.grade - a.grade);
}

function task2() {
    const groupedStudents = groupBy(students);
    const sortedStudents = sortStudentsByGrade(students);

    showResult(
        "Студенти, згруповані за групами:\n" +
        JSON.stringify(groupedStudents, null, 2) +
        "\n\nСтуденти, відсортовані за оцінкою:\n" +
        JSON.stringify(sortedStudents, null, 2)
    );
}


// ==================== ЗАВДАННЯ 3 ====================

const employees = [
    {
        name: "Іван Петренко",
        position: "Програміст",
        salary: 35000,
        years: 3
    },
    {
        name: "Олена Коваль",
        position: "Дизайнер",
        salary: 30000,
        years: 5
    },
    {
        name: "Андрій Мельник",
        position: "Менеджер",
        salary: 42000,
        years: 7
    },
    {
        name: "Марія Бондар",
        position: "Тестувальник",
        salary: 28000,
        years: 2
    },
    {
        name: "Петро Шевченко",
        position: "Програміст",
        salary: 39000,
        years: 9
    }
];

function getAverageSalary() {
    const totalSalary = employees.reduce(
        (sum, employee) => sum + employee.salary,
        0
    );

    return totalSalary / employees.length;
}

function findMostExperiencedEmployee() {
    return employees.reduce((mostExperienced, employee) => {
        return employee.years > mostExperienced.years
            ? employee
            : mostExperienced;
    });
}

function task3() {
    const averageSalary = getAverageSalary();
    const mostExperienced = findMostExperiencedEmployee();

    showResult(
        "Середня зарплата: " +
        averageSalary.toFixed(2) +
        " грн\n\n" +
        "Найбільший досвід роботи:\n" +
        JSON.stringify(mostExperienced, null, 2)
    );
}


// ==================== ЗАВДАННЯ 4 ====================

const books = [
    {
        title: "Кобзар",
        author: "Тарас Шевченко",
        year: 1840,
        rating: 4.9,
        isRead: true
    },
    {
        title: "Захар Беркут",
        author: "Іван Франко",
        year: 1883,
        rating: 4.7,
        isRead: false
    },
    {
        title: "Тигролови",
        author: "Іван Багряний",
        year: 1944,
        rating: 4.8,
        isRead: false
    },
    {
        title: "Місто",
        author: "Валер'ян Підмогильний",
        year: 1928,
        rating: 4.6,
        isRead: true
    },
    {
        title: "Лісова пісня",
        author: "Леся Українка",
        year: 1911,
        rating: 4.9,
        isRead: true
    },
    {
        title: "Чорна рада",
        author: "Пантелеймон Куліш",
        year: 1857,
        rating: 4.3,
        isRead: false
    }
];

function getUnreadBooks() {
    return books
        .filter(book => !book.isRead)
        .map(book => book.title);
}

function getBooksByAuthor(author) {
    return books
        .filter(book =>
            book.author.toLowerCase() === author.toLowerCase()
        )
        .sort((a, b) => a.year - b.year);
}

function getTopRatedBooks() {
    return books
        .filter(book => book.rating > 4)
        .sort((a, b) => b.rating - a.rating);
}

function task4() {
    const author = prompt(
        "Введіть автора:\n\n" +
        [...new Set(books.map(book => book.author))].join("\n")
    );

    const unreadBooks = getUnreadBooks();
    const authorBooks = getBooksByAuthor(author || "");
    const topRatedBooks = getTopRatedBooks();

    showResult(
        "Непрочитані книги:\n" +
        JSON.stringify(unreadBooks, null, 2) +
        "\n\nКниги вибраного автора:\n" +
        JSON.stringify(authorBooks, null, 2) +
        "\n\nКниги з рейтингом вище 4:\n" +
        JSON.stringify(topRatedBooks, null, 2)
    );
}


// ==================== ЗАВДАННЯ 5 ====================

const orders = [
    {
        orderId: 1,
        customer: {
            name: "Захарій Шкляр",
            email: "zakharii@example.com"
        },
        items: [
            {
                name: "Ноутбук",
                quantity: 1,
                price: 28000
            },
            {
                name: "Миша",
                quantity: 2,
                price: 1200
            }
        ],
        total: 30400
    },
    {
        orderId: 2,
        customer: {
            name: "Олена Коваль",
            email: "olena@example.com"
        },
        items: [
            {
                name: "Клавіатура",
                quantity: 1,
                price: 3500
            }
        ],
        total: 3500
    },
    {
        orderId: 3,
        customer: {
            name: "Захарій Шкляр",
            email: "zakharii@example.com"
        },
        items: [
            {
                name: "Монітор",
                quantity: 1,
                price: 9500
            }
        ],
        total: 9500
    }
];

function getTotalSpentByCustomer(orders, customerName) {
    return orders
        .filter(order => order.customer.name === customerName)
        .reduce((total, order) => total + order.total, 0);
}

function task5() {
    const customerName = prompt(
        "Введіть ім'я клієнта:\n\n" +
        [...new Set(orders.map(order => order.customer.name))].join("\n")
    );

    const totalSpent = getTotalSpentByCustomer(
        orders,
        customerName || ""
    );

    showResult(
        "Клієнт: " + (customerName || "Не вказано") +
        "\n\nЗагальна сума витрат: " +
        totalSpent +
        " грн"
    );
}


// ==================== ЗАВДАННЯ 6 ====================

const salesProducts = [
    {
        productId: 1,
        name: "Ноутбук",
        price: 28000
    },
    {
        productId: 2,
        name: "Миша",
        price: 1200
    },
    {
        productId: 3,
        name: "Клавіатура",
        price: 3500
    },
    {
        productId: 4,
        name: "Монітор",
        price: 9500
    }
];

const purchases = [
    {
        purchaseId: 1,
        productId: 1,
        quantity: 2
    },
    {
        purchaseId: 2,
        productId: 2,
        quantity: 5
    },
    {
        purchaseId: 3,
        productId: 3,
        quantity: 3
    },
    {
        purchaseId: 4,
        productId: 4,
        quantity: 2
    },
    {
        purchaseId: 5,
        productId: 2,
        quantity: 2
    }
];

function getTotalSales(products, purchases) {
    return purchases.reduce((sales, purchase) => {
        const product = products.find(
            product => product.productId === purchase.productId
        );

        if (product) {
            const total = product.price * purchase.quantity;

            if (!sales[product.name]) {
                sales[product.name] = 0;
            }

            sales[product.name] += total;
        }

        return sales;
    }, {});
}

function task6() {
    const totalSales = getTotalSales(
        salesProducts,
        purchases
    );

    showResult(
        "Загальний дохід від продажу кожного товару:\n\n" +
        JSON.stringify(totalSales, null, 2)
    );
}