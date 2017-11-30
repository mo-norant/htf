import { Vehicle } from './vehicle'

export class Convoy{
    public id : string;
    public destinationCity : string;
    public distanceFromCityBorder : number;
    public speedInKmPerHour : number;
    public origin : string;
    public vehicules : Vehicle []
}

