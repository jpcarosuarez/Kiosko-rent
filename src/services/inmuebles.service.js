import {getFirestore} from '../db';

const db = getFirestore().collection("/inmuebles");

const getAll = () => {
  return db;
};

const create = (data) => {
  return db.add(data);
};

const update = (id, value) => {
  return db.doc(id).update(value);
};

const remove = (id) => {
  return db.doc(id).delete();
};

const InmuebleService = {
  getAll,
  create,
  update,
  remove
};

export default InmuebleService;