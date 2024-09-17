using BackForm.Data.UnitOfWork;
using BackForm.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace BackForm.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FormController : ControllerBase
    {
        private readonly IUnitOfWork _unitOfWork;

        public FormController(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Form>>> GeForms()
        {
            var forms = await _unitOfWork.Forms.GetAllAsync();
            return Ok(forms);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Form>> GetForm(long id)
        {
            var form = await _unitOfWork.Forms.GetByIdAsync(id);

            if (form == null)
            {
                return NotFound();
            }

            return Ok(form);
        }

        [HttpPost]
        public async Task<ActionResult<Form>> PostForm(Form form)
        {
            await _unitOfWork.Forms.AddAsync(form);
            await _unitOfWork.CompleteAsync();

            return CreatedAtAction("GetForm", new { id = form.Id }, form);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> PutForm(long id, Form form)
        {
            if (id != form.Id)
            {
                return BadRequest();
            }

            _unitOfWork.Forms.Update(form);

            try
            {
                await _unitOfWork.CompleteAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if ((await _unitOfWork.Forms.GetByIdAsync(id)) == null)
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteForm(long id)
        {
            var form = await _unitOfWork.Forms.GetByIdAsync(id);
            if (form == null)
            {
                return NotFound();
            }

            _unitOfWork.Forms.Delete(form);
            await _unitOfWork.CompleteAsync();

            return NoContent();
        }

    }
}
