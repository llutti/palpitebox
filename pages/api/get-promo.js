import { GoogleSpreadsheet } from 'google-spreadsheet';

const doc = new GoogleSpreadsheet(process.env.SHEET_DOC_ID);

const fromBase64 = value =>{
  const buff = Buffer.from(value, 'base64');
  return buff.toString('ascii');
}

export default async (req, res) =>
{
  try
  {
    await doc.useServiceAccountAuth({
      client_email: process.env.SHEET_CLIENT_EMAIL,
      private_key: fromBase64(process.env.SHEET_PRIVATE_KEY)
    });
    await doc.loadInfo();

    const sheetConfig = doc.sheetsByIndex[2];
    await sheetConfig.loadCells('A3:B3');

    const mostrarPromocaoCell = sheetConfig.getCell(2, 0);
    const textoCell = sheetConfig.getCell(2, 1);

    res.end(JSON.stringify({
      showCupom: mostrarPromocaoCell.value === 'VERDADEIRO',
      messageCupom: textoCell.value
    }));
  }
  catch (error)
  {
    console.log('Log ao Carregar os dados da Planilha', error);

    res.end(JSON.stringify({
      showCupom: false,
      messageCupom: ''
    }));
  }
};
