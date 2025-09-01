'use client'

import './style.scss';
import { useState } from 'react';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import dayjs, { Dayjs } from 'dayjs';
import 'dayjs/locale/pt-br';
import { Box, FormControl, TextField, Typography } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

interface IForm {
    name: string;
    phone: string;
    date: Dayjs | null;
}

export default function TalkToUs() {

    const [form, setForm] = useState<IForm>({
        name: '',
        phone: '',
        date: null,
    })

    const handleChange = (field: keyof IForm, value: any) => {
        setForm((prev) => ({ ...prev, [field]: value }));
    };


    return (
        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="pt-br">
            <Box component="section" className="talkToUs">
                <Typography variant="h6" className="title">
                    <span className="bold">Fale</span> conosco<span className="bold">!</span>
                </Typography>
                <FormControl className='form'>
                    <Box marginBottom="1rem" component="div">
                        <TextField
                            label="Seu nome"
                            value={form?.name}
                            onChange={(it) => handleChange('name', it.target.value)}
                            fullWidth
                            required
                        />
                    </Box>
                    <Box marginBottom="1rem" component="div">
                        <TextField
                            label="Telefone"
                            value={form?.phone}
                            onChange={(it) => handleChange('date', it.target.value)}
                            fullWidth
                            required
                        />
                    </Box>
                    <Box mb={2} component="div">
                        <DatePicker
                            label="Agendamento"
                            value={form.date}
                            onChange={(it) => {
                                handleChange("date", it);
                            }}
                            format="DD/MM/YYYY"
                        />
                    </Box>
                </FormControl>
            </Box>
        </LocalizationProvider>
    )
}