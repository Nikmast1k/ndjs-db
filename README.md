HomeWork ndjs-2.6

//Вставка одного документа 

db.books.insertOne(
  {
    title: "book title",
    description: "book description",
    authors: "book authors"
  }
)

//Вставка нескольких документов 

db.books.insertMany( [
      { title: "1st title", description: "1st description", authors: "1st book authors" },
      { title: "2nd title", description: "2nd description", authors: "2nd book authors" },
      { title: "3rd title", description: "3rd description", authors: "3rd book authors" }
] )

//Поиск полей документов коллекции по полю title 

db.books.find(
  { title: "2nd title" }
)

//Редактирование полей: description и authors коллекции по _id записи 

db.books.updateOne(
  { _id: 3 },
  { $set: {title: "new 3rd title", description: "new 3rd description"} }
)
