import { useEuTemplatesBlocks } from '../templates/useEuTemplateBlocks';

export function filterAndArrangeBlocks(namesToFilter: string[]) {
  const getEuBlocks = useEuTemplatesBlocks();
  const resultMap = new Map();

  for (const block of getEuBlocks()) {
    resultMap.set(block.name, block);
  }

  const filteredAndArrangedBlocks = [];

  for (const name of namesToFilter) {
    if (resultMap.has(name)) {
      filteredAndArrangedBlocks.push(resultMap.get(name));
      resultMap.delete(name);
    }
  }

  return filteredAndArrangedBlocks;
}
