using Microsoft.AspNetCore.Mvc;
using Summaries.Data.Models;
using Summaries.Data.Services;

namespace Summaries.Controllers
{
    [Route("api/[controller]")]
    public class BooksController : ControllerBase
    {
        private IBookService _service;

        public BooksController(IBookService service)
        {
            _service = service;
        }

        //Create/Add a new book
        [HttpPost("AddBook")]
        public IActionResult AddBook([FromBody] Book book)
        {
            _service.AddBook(book);
            return Ok("Added");
        }

        //Read all books
        [HttpGet("[action]")]
        public IActionResult GetBooks()
        {
            var allBooks = _service.GetAllBooks();

            return Ok(allBooks);
        }

        //Updating an existing book
        [HttpPut("UpdateBook/{id}")]
        public IActionResult UpdateBook(int id, [FromBody]Book book)
        {
            _service.UpdateBook(id,book);

            return Ok(book);
        }

        //Delete a book
        [HttpDelete("DeleteBook/{id}")]
        public IActionResult DeleteBook(int id)
        {
            _service.DeleteBook(id);

            return Ok();
        }
    }
}