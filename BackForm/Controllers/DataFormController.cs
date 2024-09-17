using BackForm.Data.UnitOfWork;
using BackForm.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace BackForm.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DataFormController : ControllerBase
    {
        private readonly IUnitOfWork _unitOfWork;

        public DataFormController(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<DataForm>>> GeDataForms()
        {
            var dataForms = await _unitOfWork.DataForms.GetAllAsync();
            return Ok(dataForms);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<DataForm>> GetDataForm(long id)
        {
            var dataForm = await _unitOfWork.DataForms.GetByIdAsync(id);

            if (dataForm == null)
            {
                return NotFound();
            }

            return Ok(dataForm);
        }

        [HttpPost]
        public async Task<ActionResult<DataForm>> PostDataForm(DataForm dataForm)
        {
            await _unitOfWork.DataForms.AddAsync(dataForm);
            await _unitOfWork.CompleteAsync();

            return CreatedAtAction("GetDataForm", new { id = dataForm.Id }, dataForm);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> PutDataForm(long id, DataForm dataForm)
        {
            if (id != dataForm.Id)
            {
                return BadRequest();
            }

            _unitOfWork.DataForms.Update(dataForm);

            try
            {
                await _unitOfWork.CompleteAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if ((await _unitOfWork.DataForms.GetByIdAsync(id)) == null)
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
        public async Task<IActionResult> DeleteDataForm(long id)
        {
            var dataForm = await _unitOfWork.DataForms.GetByIdAsync(id);
            if (dataForm == null)
            {
                return NotFound();
            }

            _unitOfWork.DataForms.Delete(dataForm);
            await _unitOfWork.CompleteAsync();

            return NoContent();
        }
    }
}
