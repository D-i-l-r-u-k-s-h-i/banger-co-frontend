import React from 'react'
import NavBarComponent from '../components/navbar_component';
import BookAEComponent from '../components/book_ae_component';
import Footer from '../components/footer'

function AdditionalEquipmentPage() {
    return (
        <div>
            <div className='page-wrap'>
            <NavBarComponent/>
            <BookAEComponent/>
            </div>
            <Footer/>
        </div>
    )
}

export default AdditionalEquipmentPage
