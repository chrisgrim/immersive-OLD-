<?php
namespace App\AuditDrivers;

use OwenIt\Auditing\Contracts\Audit;
use OwenIt\Auditing\Contracts\Auditable;
use OwenIt\Auditing\Contracts\AuditDriver;
use App\Event;

class MyCustomDriver implements AuditDriver
{
    /**
     * Perform an audit.
     *
     * @param \OwenIt\Auditing\Contracts\Auditable $model
     *
     * @return \OwenIt\Auditing\Contracts\Audit
     */
    public function audit(Auditable $model)
    {
        if ($model instanceof Event && $model->status === 'p') {
            return;
        }

        // Do the regular implementation
        return parent::audit($model);
    }

    /**
     * Remove older audits that go over the threshold.
     *
     * @param \OwenIt\Auditing\Contracts\Auditable $model
     *
     * @return bool
     */
    public function prune(Auditable $model): bool
    {
        // TODO: Implement the pruning logic
    }
}