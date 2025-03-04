import React from 'react'

const Deal = () => {
  return (
    <section style={{marginTop:'100px',background:'url(./img/deal-bg.jpg) no-repeat center',padding:'120px 0'}}>
        <div className="container">
            <div className="row">
                <div className="col-lg-4 rounded p-4" style={{backgroundColor:'#ffffff38',boxShadow:'-3px 3px 8px 5px rgba(0, 0, 0, 0.05)'}}>
                    <p className='fs-5 mb-2'><span className='text-success fs-3 fw-bold'>35%</span> OFF</p>
                    <h2 className='fw-bold mb-3'>Great deal on organic food.</h2>
                    <p className='text-secondary'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do maecenas accumsan lacus vel facilisis.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Deal