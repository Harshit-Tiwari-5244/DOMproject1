{/* <div class="col-3 mt-5">
                <div class="card">
                    <img src="https://placehold.co/600x400/000000/FFF" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>

                    </div>
                </div>
            </div>
*/}

class Countries{
    countries = [];

    getCountries = async() =>{
        let response = await fetch("https://restcountries.com/v3.1/all")
       this.countries = await response.json();
        
    }

    render = async() => {
        await this.getCountries();
        for (const country of this.countries) {
            console.log(country);
            
        }
    }
}

let country = new Countries;
country.render();
    