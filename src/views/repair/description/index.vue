<template>
  <div class="description-box">
    <h2 class="description-title">
      维修维护（巡检）说明
    </h2>
    <div class="description-content">
      <p class="description-item">
        一、仪器设备出现故障后，使用单位应及时组织维修。
        <span class="item-sub">
        1.单台维修预算10万元以下的，由使用单位负责人审批后组织实施。
      </span>
        <span class="item-sub">
        2.单台维修预算10万元及以上20万元以下的，经资产与实验室管理处报分管校领导同意后实施。
      </span>
        <span class="item-sub">
        3.单台维修预算20万元及以上30万元以下的，由资产处经分管校领导审签后报分管财务校领导审批后实施。
      </span>
        <span class="item-sub">
        4.单台维修预算30万元及以上的，按照学校议事规则决策通过后实施。
      </span>
      </p>
      <p class="description-item">二、单台设备维修预算达到30万元及以上或维修预算金额达到设备原值1/2及以上，维修申请前须经专家论证。</p>
      <p class="description-item">三、仪器设备维修后，各单位应及时组织验收，对性能指标进行检测。验收小组由3人及以上组成,可在分管领导、所在实验室（教研室、所、中心、学科、平台等）负责人、管理员、使用人等中选择，验收报告报资产处备案。其中维修金额在10万元及以上的验收，由资产与实验室管理处组织，单位分管领导须参加。</p>
      <p class="description-item">四、学校定期开展常规实验仪器设备、实验室通风设施和特殊实验仪器设备的维护（巡检）。</p>
    </div>
  </div>
</template>

<style lang="scss">
.description-box{
  padding:20px  40px;
  text-align: center;
  .description-title {
    font-size: 18pt; font-family: 方正小标宋简体,serif;
    margin-bottom: 40px;
  }
  .description-content{
    display: flex;
    flex-direction: column;
    gap: 40px;
    p{
      text-align: left;
      text-indent: 2em;
      color: rgb(0, 0, 0); font-size: 15pt; font-family: 楷体,serif;
      line-height: 26pt;
      display: flex;
      gap: 20px;
      flex-direction: column;
      &:first-letter {
        font-family: 黑体,serif;
      }
    }
  }

}
</style>