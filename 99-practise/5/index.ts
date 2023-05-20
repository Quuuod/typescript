type Animal = 'cat' | 'dog' | 'bird';

enum AnimalStatuses {
  Available = 'available',
  NotAvailable = 'not available',
}
interface AnimalData {
  animal: Animal;
  breed: string;
  sterilized?: string;
}

// Response #1

interface AnimalAvailableData extends AnimalData {
  location: string;
  age?: number;
}

// Response #2

interface AnimalNotAvailableData {
  message: string;
  nextUpdateIn: Date;
}

interface AnimalAvailableResponse {
  status: AnimalStatuses.Available;
  data: AnimalAvailableData;
}

interface AnimalNotAvailableResponse {
  status: AnimalStatuses.NotAvailable;
  data: AnimalNotAvailableData;
}

type Res = AnimalAvailableResponse | AnimalNotAvailableResponse;

function checkAnimalData(animal: Res) {
  if (isResponseAvailable(animal)) {
    return animal.data;
  } else {
    return `${animal.data.message}, you can try in ${animal.data.nextUpdateIn}`;
  }
}

function isResponseAvailable(res: Res): res is AnimalAvailableResponse {
  return res.status === 'available';
}
