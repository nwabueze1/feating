import { EuBlock13, useEuBlock13Data } from "./../blocks/EuBlock13";
import { EuBlock9, useEuBlock9Data } from "./../blocks/EuBlock9";
import { EuBlock8 } from "./../blocks/EuBlock8/EuBlock8";
import { useEuBlock8Data } from "../blocks/EuBlock8/data/useEuBlock8Data";
import { EuBlock5 } from "./../blocks/EuBlock5/EuBlock5";
import { useEuBlock5Data } from "./../blocks/EuBlock5/data/useEuBlock5Data";
import { Blocks } from "../enumerations/blockNames";
import { useEuBlock4Data } from "./../blocks/EuBlock4/data/useEuBlock4Data";
import { EuBlock4 } from "./../blocks/EuBlock4/EuBlock4";
import { useEuBlock1Data } from "./../blocks/EuBlock1/data/useEuBlock1Data";
import { EuBlock1 } from "./../blocks/EuBlock1/EuBlock1";
import { EuBlock2 } from "./../blocks/EuBlock2/EuBlock2";
import { useEuBlock2Data } from "./../blocks/EuBlock2/data/useEuBlock2Data";
import { EuTemplateBlockType } from "./type";
import { useEuBlock3Data } from "../blocks/EuBlock3/data/useEuBlock3Data";
import { EuBlock3 } from "../blocks/EuBlock3/EuBlock3";
import { EuBlock10, useEuBlock10Data } from "../blocks/EuBlock10";
import { EuBlock16, useEuBlock16Data } from "../blocks/EuBlock16";
import { useEuBlock6Data, EuBlock6 } from "../blocks/Eublock6";
import { useEuBlock14Data, EuBlock14 } from "../blocks/EuBlock14";
import { useEuBlock12Data, EuBlock12 } from "../blocks/EuBlock12";
import { EuBlock11, useEuBlock11Data } from "../blocks/EuBlock11";
import { EuBlock15, useEuBlock15Data } from "../blocks/EuBlock15";
import { EuBlock19, useEuBlock19Data } from "../blocks/EuBlock19";
import { EuBlock17, useEuBlock17Data } from "../blocks/EuBlock17";
import { EuBlock18, useEuBlock18Data } from "../blocks/EuBlock18";
import { EuBlock20, useEuBlock20Data } from "../blocks/EuBlock20";
import { useEuBlock7Data } from "../blocks/EuBlock7/Data/useEuBlock7Data";
import { EuBlock7 } from "../blocks/EuBlock7/EuBlock7";
import { EuBlock21, useEuBlock21Data } from "../blocks/EuBlock21";
import { EuBlock22 } from "../blocks/EuBlock22";
import { useEuBlock22Data } from "../blocks/EuBlock22/data";

export const useEuTemplatesBlocks = () => {
  const { config } = useEuBlock1Data();
  const { configuration } = useEuBlock2Data();
  const { configuration: blog3Config } = useEuBlock3Data();
  const { configuration: block4Config } = useEuBlock4Data();
  const { configuration: block5Config } = useEuBlock5Data();
  const { configuration: block6Config } = useEuBlock6Data();
  const { configuration: block7Config } = useEuBlock7Data();
  const { configuration: block9Config } = useEuBlock9Data();
  const { configuration: block10Config } = useEuBlock10Data();
  const { configuration: block8Config } = useEuBlock8Data();
  const { configuration: block16Config } = useEuBlock16Data();
  const { configuration: block13Config } = useEuBlock13Data();
  const { configuration: block14Config } = useEuBlock14Data();
  const { configuration: block11Config } = useEuBlock11Data();
  const { configuration: block12Config } = useEuBlock12Data();
  const { configuration: block15Config } = useEuBlock15Data();
  const { configuration: block19Config } = useEuBlock19Data();
  const { configuration: block17Config } = useEuBlock17Data();
  const { configuration: block18Config } = useEuBlock18Data();
  const { configuration: block21Config } = useEuBlock21Data();
  const { configuration: block20Config } = useEuBlock20Data();
  const { configuration: block22Config } = useEuBlock22Data();

  return (): EuTemplateBlockType[] => [
    {
      name: Blocks.BLOCK1,
      component: EuBlock1,
      props: config,
    },
    {
      name: Blocks.BLOCK2,
      component: EuBlock2,
      props: configuration,
    },
    {
      name: Blocks.BLOCK3,
      component: EuBlock3,
      props: blog3Config,
    },
    {
      name: Blocks.BLOCK4,
      component: EuBlock4,
      props: block4Config,
    },
    {
      name: Blocks.BLOCK5,
      component: EuBlock5,
      props: block5Config,
    },
    {
      name: Blocks.BLOCK6,
      component: EuBlock6,
      props: block6Config,
    },
    {
      name: Blocks.BLOCK7,
      component: EuBlock7,
      props: block7Config,
    },
    {
      name: Blocks.BLOCK10,
      component: EuBlock10,
      props: block10Config,
    },
    {
      name: Blocks.BLOCK11,
      component: EuBlock11,
      props: block11Config,
    },
    {
      name: Blocks.BLOCK12,
      component: EuBlock12,
      props: block12Config,
    },
    {
      name: Blocks.BLOCK8,
      component: EuBlock8,
      props: block8Config,
    },
    {
      name: Blocks.BLOCK14,
      component: EuBlock14,
      props: block14Config,
    },
    {
      name: Blocks.BLOCK9,
      component: EuBlock9,
      props: block9Config,
    },
    {
      name: Blocks.BLOCK16,
      component: EuBlock16,
      props: block16Config,
    },
    {
      name: Blocks.BLOCK13,
      component: EuBlock13,
      props: block13Config,
    },
    {
      name: Blocks.BLOCK11,
      component: EuBlock11,
      props: block11Config,
    },
    {
      name: Blocks.BLOCK15,
      component: EuBlock15,
      props: block15Config,
    },
    {
      name: Blocks.BLOCK19,
      component: EuBlock19,
      props: block19Config,
    },
    {
      name: Blocks.BLOCK17,
      component: EuBlock17,
      props: block17Config,
    },
    {
      name: Blocks.BLOCK18,
      component: EuBlock18,
      props: block18Config,
    },
    {
      name: Blocks.BLOCK21,
      component: EuBlock21,
      props: block21Config,
    },
    {
      name: Blocks.BLOCK20,
      component: EuBlock20,
      props: block20Config,
    },
    {
      name: Blocks.BLOCK22,
      component: EuBlock22,
      props: block22Config,
    },
  ];
};
