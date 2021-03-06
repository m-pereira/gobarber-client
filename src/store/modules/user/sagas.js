import { all, call, takeLatest, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { UPDATE_PROFILE_REQUEST } from './types';
import { updateProfileFailure, updateProfileSuccess } from './actions';
import api from '~/services/api';

export function* updateProfile({ payload }) {
  try {
    const { name, email, avatar_id, ...rest } = payload.data;

    const profile = {
      name,
      email,
      avatar_id,
      ...(rest.oldPassword ? rest : {}),
    };

    const response = yield call(api.put, 'users', profile);

    toast.success('Perfil atualizado com sucesso!');

    yield put(updateProfileSuccess(response.data));
  } catch (e) {
    toast.error(`Erro ao atualizar, confira seus dados. ${e}`);
    yield put(updateProfileFailure());
  }
}

export default all([takeLatest(UPDATE_PROFILE_REQUEST, updateProfile)]);
