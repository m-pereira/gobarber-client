import React, { useEffect, useRef, useState } from 'react';
import { useField } from '@rocketseat/unform';
import { Container } from './styles';
import api from '~/services/api';

const AvatarInput = () => {
  const { defaultValue, registerField } = useField('avatar');

  const [file, setFile] = useState(defaultValue && defaultValue.id);
  const [preview, setPreview] = useState(defaultValue && defaultValue.url);

  const ref = useRef();

  useEffect(() => {
    if (ref.current) {
      registerField({
        name: 'avatar_id',
        ref: ref.current,
        path: 'dataset.file',
      });
    }
  }, [ref, registerField]);

  const handleChange = async (e) => {
    const data = new FormData();

    data.append('file', e.target.files[0]);

    const response = await api.post('files', data);
    const { id, url } = response.data;

    setFile(id);
    setPreview(url);
  };

  return (
    <Container>
      <label htmlFor='avatar'>
        <img
          src={preview || 'https://images.apilist.fun/adorable_avatars_api.png'}
          alt='avatar'
        />

        <input
          type='file'
          id='avatar'
          accept='image/*'
          onChange={handleChange}
          data-file={file}
          ref={ref}
        />
      </label>
    </Container>
  );
};

export default AvatarInput;
