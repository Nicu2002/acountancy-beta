
class UsersService {
    _URL = "https://retoolapi.dev/geeOvB/data";


    getResource = async (url)=> {
        let res = await fetch(url)
            .catch(e => console.log(e));
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }

        return await res.json();
    }

    getAllData = async(filter, filterName) => {
        let url = this._URL;
        if(!!filter && !!filterName) {
            url = this._URL + `?${filterName}=${filter}`
        }
        const res = await this.getResource(url);
        let filtredArray = res.map(this._parseData).filter(item => !!item.name === true);

        return this.filterData(filtredArray);
    }

    filterData = (arr) => {
        let uniqueItems = [];
        let finalArr = arr.filter(item => {
            const isDublicate = uniqueItems.includes(item.name);
            if (!isDublicate) {
                uniqueItems.push(item.name);
                return true;
            }
            return false;
        });
        return finalArr;
    }

    _parseData = (res) => {
        return {
            id: res.id,
            name: res.Name,
            job: res.Job ? res.Job : "unknown position",
            city: res.City ? res.City: "unknown city",
            email: res.Email ? res.Email: "-",
            dateCreated: res.DateCreated ? res.DateCreated: "-",
            phoneNumber: res["Phone Number"] ? res["Phone Number"] : "-"
        }
    }

    postData = async (newItem) => {
        const res = await fetch(this._URL, {
            method: 'POST',
            headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
            body: JSON.stringify(newItem)
        });
        return await res;
    }
}

export default UsersService;