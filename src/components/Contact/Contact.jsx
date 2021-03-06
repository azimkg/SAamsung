import React from 'react';
import './Contact.css'


const Contact = () => {
    return (
        <div>
            <div style={{ margin: "20px 20px 20px" }}>
                <h1 style={{ fontSize: "42px", fontWeight: "bold", color: "black" }}>Контакты</h1>
                <div className='adres-contact'>
                    <div className='saloon'>
                        <div className='glav'>Galaxy Studio</div>
                        <div className='gact'>
                            <p style={{ margin: " 0 0 10px" }}>
                                <strong style={{ fontWeight: " bold" }}>
                                    ул. Ахунбаева, 94
                                    <br />
                                </strong>
                                Мобильные телефоны,<br /> планшеты и аксессуары
                            </p>
                            <p style={{ margin: " 0 0 10px" }}>
                                0312 56 60 05 <br />
                                Время работы с 09:00 до 19.00
                            </p>
                        </div>
                    </div>
                    <div className='saloon'>
                        <div className='glav'>Samsung Brandshop ЦУМ</div>
                        <div className='gact'>
                            <p style={{ margin: " 0 0 10px" }}>
                                <strong style={{ fontWeight: " bold" }}>
                                    ЦУМ, пр. Чуй, 155
                                    <br />
                                </strong>
                                Мобильные телефоны,<br /> планшеты и аксессуары
                            </p>
                            <p style={{ margin: " 0 0 10px" }}>
                                0312 90 06 22<br />
                                Время работы с 10 до 20.00
                            </p>
                        </div>
                    </div>
                    <div className='saloon'>
                        <div className='glav'>Samsung Brandshop ГУМ</div>
                        <div className='gact'>
                            <p style={{ margin: " 0 0 10px" }}>
                                <strong style={{ fontWeight: " bold" }}>
                                    ГУМ, пр. Чуй, 92
                                    <br />
                                </strong>
                                Мобильные телефоны,<br /> планшеты и аксессуары
                            </p>
                            <p style={{ margin: " 0 0 10px" }}>
                                0552 12 54 20 <br />
                                Время работы с 10 до 22.00
                            </p>
                        </div>
                    </div>
                    <div className='saloon'>
                        <div className='glav'>Samsung Aurora</div>
                        <div className='gact'>
                            <p style={{ margin: " 0 0 10px" }}>
                                <strong style={{ fontWeight: " bold" }}>
                                    ул. Ибраимова, 40
                                    <br />
                                </strong>
                                Техника для дома и телевизоры
                            </p>
                            <p style={{ margin: " 0 0 10px" }}>

                                0312 38 92 67<br />
                                0555 38 92 67 <br />
                                Время работы с 09:00 до 19.00
                            </p>
                        </div>
                    </div>

                </div>

            </div>



        </div >
    );
};

export default Contact;