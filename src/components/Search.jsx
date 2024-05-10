import { FaSearch } from "react-icons/fa";
import CustomSelect from './CustomSelect';
import { useState } from 'react';



function Search() {
    
    const [selectedValues, setSelectedValues] = useState({
        subCity : '',
        price: '',
        property: ''
      });

    const handleChange = (name) => (value) => {
        setSelectedValues((prevValues) => ({
            ...prevValues,
            [name]: value
        }));
    };
    
    const handleSubmit=()=>{
        alert('success')
    }

    return (
        <div className="search-container">
            
            <form onSubmit={handleSubmit} className='search-box'>
                    <CustomSelect
                        label="Sub-city"
                        options={[
                            { value: 'adihaki', label: 'Adi-haki' },
                            { value: 'kedamayWeyane', label: 'Kedamay weyane' },
                            { value: 'hadnet', label: 'Hadnet' },
                            { value: 'quiha', label: 'Quiha' },
                            { value: 'hawelti', label: 'Hawelti' },
                        ]}
                        value={selectedValues.subCity}
                        onChange={handleChange('subCity')}
                            />
                    <CustomSelect
                        label="Price"
                        options={[
                            { value: '1000-2000', label: '1000-2000' },
                            { value: '5000-20000', label: '5000-20,000' },
                            { value: 'above', label: 'above 30,000' },

                        ]}
                        value={selectedValues.price}
                        onChange={handleChange('price')}
                    />
                    <CustomSelect
                        label="Property-Type"
                        options={[
                            { value: 'Apartment', label: 'Apartment' },
                            { value: 'Villa', label: 'Villa' },
                            { value: 'OfficeSpace', label: 'Office Space' },
                            { value: 'VacationRental', label: 'Vacation Rental' }

                        ]}
                        value={selectedValues.property}
                        onChange={handleChange('property')}
                    />

                    <button type='submit' id="search-icon"> 
                        <FaSearch size={'1.5rem'}/>
                    </button>
               </form>
        </div>
    )
    }
export default Search