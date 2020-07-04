import { GoogleSpreadsheet } from 'google-spreadsheet';
import moment from 'moment';

const doc = new GoogleSpreadsheet(process.env.SHEET_DOC_ID);

const fromBase64 = value =>{
  const buff = Buffer.from(value, 'base64');
  return buff.toString('ascii');
}

const gerarCupom = () =>
{
  const code = parseInt(moment().format('YYMMDDHHmmssSSS')).toString(16).toUpperCase();

  return `${code.substr(0, 4)}-${code.substr(4, 4)}-${code.substr(8, 4)}`
}

export default async (req, res) =>
{
  try
  {
    const dataBody = JSON.parse(req.body);
    await doc.useServiceAccountAuth({
      client_email: process.env.SHEET_CLIENT_EMAIL,
      private_key: fromBase64(process.env.SHEET_PRIVATE_KEY)
    });
    await doc.loadInfo();

    const sheetConfig = doc.sheetsByIndex[2];
    await sheetConfig.loadCells('A3:B3');

    const mostrarPromocaoCell = sheetConfig.getCell(2, 0);
    const textoCell = sheetConfig.getCell(2, 1);
    let Cupom = '';
    let Promo = '';

    if (mostrarPromocaoCell.value === 'VERDADEIRO')
    {
      Cupom = gerarCupom();
      Promo = textoCell.value;
    }

    const sheet = doc.sheetsByIndex[1];
    // Nome 	Email	Whatsapp	Cupom	Promo

    await sheet.addRow({
      Nome: dataBody.Nome,
      Email: dataBody.Email,
      Whatsapp: dataBody.Whatsapp,
      Nota: parseInt(dataBody.Nota),
      'Data Preenchimento': moment().format('DD/MM/YYYY HH:mm:ss'),
      Cupom,
      Promo
    });

    res.end(JSON.stringify({
      showCupom: Cupom !== '',
      Cupom,
      Promo
    }));
  }
  catch (error)
  {
    console.log('Log ao Carregar os dados da Planilha', error);

    res.end('error');
  }
};
