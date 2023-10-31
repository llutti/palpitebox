import { DateTime } from 'luxon';
import { NextApiRequest, NextApiResponse } from 'next';

import { doc } from '../../utils/googleSpreadSheet';

const gerarCupom = () =>
{
  const code = parseInt(DateTime.now().toFormat('yyyyMMddHHmmssSSS')).toString(16).toUpperCase();
  return `${code.substring(0, 4)}-${code.substring(4, 8)}-${code.substring(8)}`;
};

const handler = async (req: NextApiRequest, res: NextApiResponse) =>
{
  try
  {
    const dataBody = JSON.parse(req.body);

    await doc.loadInfo();

    const sheetConfig = doc.sheetsByIndex[2];
    await sheetConfig.loadCells('A3:B3');

    const mostrarPromocaoCell = sheetConfig.getCell(2, 0);
    const textoCell = sheetConfig.getCell(2, 1);
    let Cupom = '';
    let Promo: typeof textoCell.value = '';

    if (mostrarPromocaoCell.value === 'VERDADEIRO')
    {
      Cupom = gerarCupom();
      Promo = textoCell.value;
    }

    const sheet = doc.sheetsByIndex[1];
    // Nome 	Email	Whatsapp	Cupom	Promo

    await sheet
      .addRow(
        {
          Nome: dataBody.Nome,
          Email: dataBody.Email,
          Whatsapp: dataBody.Whatsapp,
          Nota: parseInt(dataBody.Nota),
          'Data Preenchimento': DateTime.now().toFormat('DD/MM/YYYY HH:mm:ss'),
          Cupom,
          Promo: Promo as string | number | boolean
        });

    res.end(
      JSON.stringify(
        {
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

export default handler;