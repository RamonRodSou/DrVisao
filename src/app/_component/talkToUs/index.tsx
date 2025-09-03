'use client';
import './style.scss';
import { FormEvent, useState } from 'react';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import dayjs, { Dayjs } from 'dayjs';
import 'dayjs/locale/pt-br';
import { Box, TextField, Typography, Button } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Person } from '@classes/person/Person';

export default function TalkToUs() {

    const [form, setForm] = useState<Person>(new Person)

    function handleChange(field: keyof Person, value: any) {
        setForm(prev => {
            const data = { ...prev, [field]: value };
            return Person.fromJson(data);
        });
    };

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const payload = {
            firstname: form.firstname,
            lastname: form.lastname,
            phone: form.phone,
            email: form.email,
            date: form.date ? dayjs(form.date).format("DD/MM/YYYY") : null,
            timeout: dayjs().format("DD/MM/YYYY HH:mm:ss")
        };

        try {
            const res = await fetch('/api/sendForm', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
            });

            if (!res.ok) throw new Error('Erro ao enviar formulário');
        } catch (err) {
            console.error('Erro ao enviar formulário:', err);
        }

        setForm(new Person())
    }

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="pt-br" >
            <Box component="section" className="talkToUs" id="talkToUs">
                <Typography variant="h6" className="title" data-aos="fade-up">
                    <span className="bold">Fale</span> conosco<span className="bold">!</span>
                </Typography>
                <form className='form' onSubmit={handleSubmit}>
                    <Box marginBottom="1rem" component="div" data-aos="fade-up" data-aos-duration="1000">
                        <TextField
                            label="Nome"
                            value={form?.firstname}
                            onChange={(it) => handleChange('firstname', it.target.value)}
                            fullWidth
                            required
                        />
                    </Box>
                    <Box marginBottom="1rem" component="div" data-aos="fade-up" data-aos-duration="1000">
                        <TextField
                            label="Sobrenome"
                            value={form?.lastname}
                            onChange={(it) => handleChange('lastname', it.target.value)}
                            fullWidth
                            required
                        />
                    </Box>
                    <Box marginBottom="1rem" component="div" className='phoneNdate' data-aos="fade-up" data-aos-duration="1000">
                        <TextField
                            label="Telefone"
                            value={form?.phone}
                            onChange={(it) => handleChange('phone', it.target.value)}
                            fullWidth
                            placeholder='3290001111'
                            required
                        />

                        <DatePicker
                            className='date'
                            label="Data de nascimento"
                            value={form.date ? dayjs(form.date) : null}
                            onChange={(it) => {
                                handleChange("date", it?.toDate() ?? null);
                            }}
                            format="DD/MM/YYYY"
                        />
                    </Box>
                    <Box marginBottom="1rem" component="div" data-aos="fade-up" data-aos-duration="1000">
                        <TextField
                            label="email"
                            value={form?.email}
                            onChange={(it) => handleChange('email', it.target.value)}
                            fullWidth
                            required
                        />
                    </Box>

                    <Button type="submit" variant="contained" color="primary" fullWidth data-aos="fade-up" data-aos-duration="1000">
                        Agendar
                    </Button>
                </form>
            </Box>
        </LocalizationProvider>
    )
}