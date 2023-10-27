import { NextApiRequest, NextApiResponse } from 'next';
import { doc } from '../../utils/googleSpreadSheet';

export default async (req: NextApiRequest, res: NextApiResponse) =>
{
  try
  {
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
